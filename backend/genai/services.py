from google import genai
from google.genai import types
from config import Settings
from .constants import summaryInstruction, recommendationInstruction
from .utils import validate_recommended_sections
import json

settings = Settings()
client = genai.Client(api_key=settings.GOOGLE_AI_KEY)


class GenAIService:
    async def post_summary(req):
        response = client.models.generate_content(
            model=constants.aiModel,
            contents=req.body,
            config=types.GenerateContentConfig(system_instruction=summaryInstruction),
        )

        return {"data": response.text}

    async def post_recommendation(req):
        modeledReq = json.dumps([obj.model_dump() for obj in req.storage])

        response = client.models.generate_content(
            model=constants.aiModel,
            contents=modeledReq,
            config=types.GenerateContentConfig(
                system_instruction=recommendationInstruction
            ),
        )

        return {"data": validate_recommended_sections(response.text)}
