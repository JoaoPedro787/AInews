
# AI News

AI News is a web app that uses AI to summarize The Guardian’s articles and provide personalized news recommendations based on your reading habits.

## Technologies

- **Backend:** FastAPI
- **Frontend:** ReactJS (Vite)
- **Styling:** TailwindCSS
- **APIs:** Gemini API, The Guardian API

## Features

* **Modern UI/UX** – Clean, intuitive, and seamless interface.
* **Latest News** – Real-time updates from multiple sources.
* **AI-Powered Recommendations** – Personalized article suggestions.
* **Quick Summaries** – Concise AI-generated summaries of full articles.
* **Insightful Analysis** – Key points, trends, and context highlighted.
* **Enhanced Comprehension** – Complex topics made easy to understand.
* **Smart Search** – Find relevant articles quickly and efficiently.
* **Cross-Platform** – Works on desktop, tablet, and mobile devices.



## Screenshots

![Landing page](https://i.postimg.cc/k4sJNqQY/Screenshot-2025-11-22-at-22-52-55-AI-News.png)

![Tech section](https://i.postimg.cc/YqhrgchV/Screenshot-2025-11-22-at-22-53-34-Technology.png)

![Story header](https://i.postimg.cc/DZxhJ5hN/Screenshot-2025-11-22-at-22-55-06-Rockstar-Games-delays-Grand-Theft-Auto-VI-again-to-late-2026.png)

![Before AI](https://i.postimg.cc/G2XR8zRZ/Screenshot-2025-11-22-at-22-55-21-Rockstar-Games-delays-Grand-Theft-Auto-VI-again-to-late-2026.png)

![After AI](https://i.postimg.cc/V6Kwr4wp/Screenshot-2025-11-22-at-22-55-31-Rockstar-Games-delays-Grand-Theft-Auto-VI-again-to-late-2026.png)
## Preview

🎬 [Watch the video preview](https://www.youtube.com/watch?v=75fUFPh-iwE)

## API Reference

#### POST original HTML news and return a summarized version

```http
  POST /ai/summary
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `body` | `string` | **Required**. Text to summarize. |


#### POST localStorage items to be analyzed by the AI

```http
  POST /ai/recommendation
```

| Parameter | Type     | Description                                                         |
| :-------- | :------- | :------------------------------------------------------------------ |
| `storage` | `array`  | **Required**. List of objects to analyse. Each object must include: |
|           | `object` | - `section` (string, min length 1)                                  |
|           | `object` | - `type` (string, min length 1)                                     |
|           | `object` | - `clicked` (string, min length 1)                                  |
|           | `array`  | Must have **at least 3 objects**                                    |



## Run locally

### Frontend

To install dependencies run:

```bash
cd frontend
npm install
```

### Run frontend:
```bash
npm run dev
```

### Backend

To install dependencies run:

```bash
cd backend
python -m venv .venv       
source .venv/bin/activate      # Linux/Mac
# .venv\Scripts\activate       # Windows
pip install -r requirements.txt

```

### Run backend:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### Frontend

`VITE_GUARDIAN_KEY`

### Backend

`GOOGLE_AI_KEY`


## Lessons Learned

Through this project, I gained valuable experience with best practices in React JS and FastAPI. It was my first time working with AI, and the experience was extremely rewarding—it inspired me to dive deeper into the world of artificial intelligence. I even started learning Prompt Engineering as a direct result.

Additionally, this project strengthened my confidence in working with microservices, such as Gemini and The Guardian, as well as integrating various npm libraries effectively. Overall, it was a great opportunity to improve both my technical skills and my ability to structure projects in a scalable, maintainable way.
