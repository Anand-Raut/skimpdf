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
    mdfile = open("output.md", "r", encoding="utf-8")
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
           

                
if __name__ == "__main__":
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    summary = open("summary.txt", "w", encoding="utf-8")
    pdf_to_md("example.pdf")
    md_summarize()
    summary.close()
    print("Summary closed")
