import re
import pymupdf4llm
import pathlib
from transformers import pipeline, AutoTokenizer

model= "facebook/bart-large-cnn"
summarizer = pipeline("summarization", model=model)
tokenizer = AutoTokenizer.from_pretrained(model)

def summarize(TEXT) -> str:
    try:
        return summarizer(TEXT, do_sample=False)[0]['summary_text']
    except Exception as e:
        print(f"Summarization Failes {e}")
        return ""


def pdf_to_md(pdfname : str):
    md_text = pymupdf4llm.to_markdown(pdfname)
    pathlib.Path("mdfile.md").write_bytes(md_text.encode())
    print("MD file created")

def chunk_texts_by_token(text, max_tokens=1024):
    words = text.split()
    chunks = []
    current_chunk = []

    for word in words:
        current_chunk.append(word)
        if len(tokenizer(" ".join(current_chunk))["input_ids"]) > max_tokens:
            current_chunk.pop()
            chunks.append(" ".join(current_chunk))
            current_chunk = [word]

    if current_chunk:
        chunks.append(" ".join(current_chunk))

    return chunks    

# def md_summarize(): # CAN BE IMPROVED
#     mdfile = open("mdfile.md", "r", encoding="utf-8")
#     summary_f = open("summary.txt", "w", encoding="utf-8")

#     token = ""
#     line = mdfile.readline()
#     while line:
#         if "# **" in line:
#             token = "" 
#             line = mdfile.readline()
#             while line and "# **" not in line:
#                 line = re.sub(r"[^\x00-\x7F]", "", line)
#                 token += line
#                 line = mdfile.readline()
#             summary_token = summarize(token)+"\n\n"
#             if "cnn" not in summary_token.lower():
#                 summary_f.write(summary_token)
#         line = mdfile.readline()
#     summary_f.close()

def md_summarize(text):
    chunks = chunk_texts_by_token(text)
    summary = ""
    for chunk in chunks:
        summary += summarize(chunk)+"\n\n"
    return summary


pdf_path = "backend\\file.pdf"
# if __name__ == "__main__":
async def get_summary(pdf_path):                
    pdf_to_md(pdf_path)
    with open("mdfile.md","r",encoding = "utf-8") as f:
        text = f.read()

    summary = md_summarize(text)
    # print(summary)
    return summary