from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import Settings
from genai.router import router as genai_router

settings = Settings()

app = FastAPI()

app.add_middleware(CORSMiddleware, **settings.cors_config)

app.include_router(genai_router, prefix="/ai")


@app.get("/")
async def get_root() -> dict[str, str]:
    return {"hello": "Hello, world!"}
