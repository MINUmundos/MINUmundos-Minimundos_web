from fastapi import APIRouter

router = APIRouter()

@router.get("/info")
def get_info():
    return {"message": "this is MINIMUNDOS"}
