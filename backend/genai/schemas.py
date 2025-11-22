from pydantic import BaseModel, Field, field_validator


# Req to ai summarize
class Summary(BaseModel):
    body: str

    @field_validator("body", mode="before")
    @classmethod
    def validate_data(cls, value):
        if isinstance(value, str) and value.strip() != "":
            return value


class RecommendationObject(BaseModel):
    section: str = Field(min_length=1)
    type: str = Field(min_length=1)
    clicked: str = Field(min_length=1)


class Recommendation(BaseModel):
    storage: list[RecommendationObject] = Field(min_length=3)

    @field_validator("storage", mode="after")
    @classmethod
    def validate_data(cls, value):
        for obj in value:
            dumped = obj.model_dump()

            if dumped["section"].strip() == "":
                raise ValueError("No section on data.")

        return value
