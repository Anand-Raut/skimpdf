from transformer import get_summary
from fastapi import FastAPI, File, UploadFile
from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials =True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def read_root():
    return {"isrunning:", True}

@app.post("/upload")
async def upload(pdfFile: Annotated[UploadFile, File()]):
    contents = await pdfFile.read()
    with open("file.pdf", "wb") as f:
        f.write(contents)
    summary = await get_summary("file.pdf")
    return {"filename": pdfFile.filename, "status": "received", "summary": summary}
