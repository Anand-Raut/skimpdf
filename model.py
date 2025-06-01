import re
import pymupdf4llm
import pathlib
from transformers import pipeline

def summarize(TEXT) -> str:
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    try:
        return summarizer(TEXT, do_sample=False)[0]['summary_text']
    except Exception as e:
        print(f"Summarization Failes {e}")
        return ""


def pdf_to_md(pdfname : str):
    md_text = pymupdf4llm.to_markdown(pdfname)
    pathlib.Path("output.md").write_bytes(md_text.encode())
    print("MD file created")

def md_summarize(): # CAN BE IMPROVED
    mdfile = open("output.md", "r", encoding="utf-8")
    summary = open("summary.txt", "w", encoding="utf-8")

    token = ""
    line = mdfile.readline()
    while line:
        if "# **" in line:
            token = "" 
            line = mdfile.readline()
            while line and "# **" not in line:
                line = re.sub(r"[^\x00-\x7F]", "", line)
                token += line
                line = mdfile.readline()
            summary_token = summarize(token)+"\n\n"
            if "cnn" not in summary_token.lower():
                summary.write(summary_token)
        line = mdfile.readline()
    summary.close()

           
# if __name__ == "__main__":
def get_summary():                
    pdf_to_md("input.pdf")
    md_summarize()
    print("Summary closed")
