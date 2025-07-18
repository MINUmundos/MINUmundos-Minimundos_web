from fastapi import FastAPI
from app.routers import about

app = FastAPI()

app.include_router(about.router, prefix="/home")
