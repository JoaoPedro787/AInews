import json


def validate_recommended_sections(ai_output):
    try:
        ai_output = json.loads(ai_output)

    except:
        ai_output = []

    # Allowed sections
    allowed = {
        "technology",
        "football",
        "sport",
        "politics",
        "business",
        "environment",
        "science",
        "culture",
        "lifeandstyle",
        "travel",
        "uk-news",
        "us-news",
        "world",
        "australia-news",
        "books",
        "film",
        "stage",
        "music",
        "artanddesign",
        "media",
        "education",
        "money",
        "opinion",
        "fashion",
        "food",
        "law",
        "global-development",
        "cities",
        "games",
    }

    # Default fallback sections
    fallback = [
        "technology",
        "sport",
        "world",
        "business",
        "football",
        "science",
        "politics",
    ]

    # 1. Normalize (lowercase, remove spaces -> hyphens)
    normalized = []
    for item in ai_output:
        if isinstance(item, str):
            value = item.strip().lower().replace(" ", "-")
            normalized.append(value)

    # 2. Keep only allowed sections
    valid = [sec for sec in normalized if sec in allowed]

    # 3. Remove duplicates preserving order
    unique = []
    for sec in valid:
        if sec not in unique:
            unique.append(sec)

    # 4. Fill with fallback if less than 3
    for fb in fallback:
        if len(unique) >= 3:
            break
        if fb not in unique:
            unique.append(fb)

    # 5. If STILL not 3 (edge case), force fallback
    if len(unique) != 3:
        unique = fallback[:3]

    return unique
