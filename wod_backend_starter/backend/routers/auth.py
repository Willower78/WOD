from fastapi import APIRouter
from fastapi.responses import JSONResponse

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/login")
def login(email: str, password: str):
    if email == "test@example.com" and password == "password":
        return JSONResponse(content={"message": "Login successful"})
    return JSONResponse(status_code=401, content={"message": "Invalid credentials"})