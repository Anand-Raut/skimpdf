import re
import pymupdf4llm
import pathlib
from transformers import pipeline

def summarize(TEXT) -> str:
    return summarizer(TEXT, do_sample=False)[0]['summary_text']

def pdf_to_md(pdfname : str):
    md_text = pymupdf4llm.to_markdown(pdfname)
    pathlib.Path("output.md").write_bytes(md_text.encode())
    print("MD file created")

def md_summarize():
    ip = open("mdfile.md", "r", encoding="utf-8")
    token =""
    line = ip.readline()
    while line:
        if "----" in line: # NEW TEXT BLOCK AFTER THIS
            print("Token starts here: ", line)
            token = ""
            line = ip.readline()
            while line and "----" not in line:
                print("Token building: ", line)
                if len(line.strip()):
                    token += " "+line
                line = ip.readline()
            
            token = re.sub(r"[^\x00-\x7F]", "", token)
            token_summary = summarize(token)+"\n\n"
            if "cnn" not in token_summary.lower():
                summary.write(token_summary)
        line = ip.readline()
    print("Summarization done")
                
if __name__ == "__main__":
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    summary = open("summary.txt", "w", encoding="utf-8")
    pdf_to_md("example.pdf")
    md_summarize()
    summary.close()
    print("Summary closed")
