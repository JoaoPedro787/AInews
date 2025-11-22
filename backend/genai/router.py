from fastapi import APIRouter, HTTPException
from .schemas import Recommendation, Summary
from .services import GenAIService

router = APIRouter()


@router.post("/summary", response_model=dict[str, str])
async def summary_by_ai(req: Summary):
    return await GenAIService.post_summary(req)


@router.post("/recommendation", response_model=dict[str, list])
async def recommendation_algorithm(req: Recommendation):
    return await GenAIService.post_recommendation(req)
