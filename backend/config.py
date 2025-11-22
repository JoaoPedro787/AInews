from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    GOOGLE_AI_KEY: str
    cors_config: dict = {
        "allow_origins": ["http://localhost:5173/"],
        "allow_credentials": False,
        "allow_methods": ["*"],
        "allow_headers": ["*"],
    }
    model_config = SettingsConfigDict(env_file=".env")
