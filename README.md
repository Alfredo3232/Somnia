
# Somnia

Somnia: Your AI companion for personal growth and well-being. Somnia helps you track health, goals, OCEAN scores, dreams, and provides tailored daily advice, guiding you toward a more balanced and fulfilling life.

## Core Idea
A personalized companion app based on **Jungian psychology** designed for older adults, focused on **self-reflection**, **personal growth**, and **emotional well-being**. 
!! - YES, im sorry i know the hate on these high level archetypes but as a prove of concept its a good place to start.  

The app helps users:
- Set and track meaningful goals (health, family, work, friendships, education).
- Reflect on their thoughts, moods, and dreams.
- Build a more structured life with personalized AI guidance.

---

## Key Features

1. **Dynamic Persona Tracking**
   - Users’ personalities evolve over time based on actions, dreams, and reflections.
   - **High-level archetypes** like **The Explorer**, **The Hero**, **The Seeker**, and **The Shadow** are tracked and ranked.
   - **Personas are ranked dynamically** in the database, tracking how often users embody each archetype based on their behavior, goals, and dreams.

2. **Dream Logging**
   - Users log dreams, which are summarized and linked to **symbols** and **archetypal themes**.
   - **Example themes**: "Storms" tied to emotional conflict, "Light" to clarity.
   - Dreams influence persona rankings and provide tailored insights to help users connect unconscious thoughts to their conscious actions.

3. **Daily Logs**
   - Track habits (e.g., meditation, exercise), moods, and health stats in a simple, flexible format.
   - Example data: Completed habits, emotional tone, reflections, and physical stats.
   - Helps users track their progress on a daily basis, giving them more control over their emotional well-being and goals.

4. **Guided Journaling**
   - Personalized prompts tailored to the user’s **personas** and **recent patterns**.
   - Example prompt: "Your dreams show storms and searching—what do you feel you're seeking today?"
   - Designed for **nighttime reflection** to promote self-awareness before sleep.

5. **Personalized Responses via AI**
   - Integration with **ChatGPT** to provide tailored guidance.
   - Prompts are based on user context, like active personas, recent dream summaries, and daily reflections, providing **positive reinforcement** to help users reach their goals.
   - **Guidance** encourages users to take actionable steps towards their goals.

6. **Cultural Adaptation**
   - Designed for specific markets, starting with **older Mexican audiences**.
   - Prompts and guidance in **Mexican Spanish**, addressing cultural nuances to make the app feel more **personal and relevant**.

---

## User Engagement Schedule

1. **Morning Reflection (8:00 AM):**
   - **Alarm**: "¡Buenos días! ¿Qué intenciones tienes para hoy?" (Good morning! What are your intentions for today?)
   - **Action**: Set intentions for the day.

2. **Midday Reminder (12:30 PM):**
   - **Alarm**: "¿Cómo va tu día? Tómate un momento para reflexionar." (How is your day going? Take a moment to reflect.)
   - **Action**: Quick journaling on mood or thoughts.

3. **Evening Dream Prep (8:00 PM):**
   - **Alarm**: "Antes de dormir, piensa en lo que quieres encontrar en tus sueños." (Before sleeping, think about what you want to find in your dreams.)
   - **Action**: Reflect and set dream intentions.

4. **Weekly Reflection (Sunday, 9:00 AM):**
   - **Alarm**: "Es domingo, el momento perfecto para mirar atrás y ver cómo has crecido." (It's Sunday, the perfect time to look back and see how you've grown.)
   - **Action**: Review weekly summaries and track progress.

---

## Database Overview

  ```
Table Users {
  user_id UUID [pk]
  username VARCHAR(50) [unique, not null]
  email VARCHAR(100) [unique, not null]
  password VARCHAR(255) [not null]
  created_at TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table Persona {
  persona_id UUID [pk]
  user_id UUID [ref: > Users.user_id]
  persona_type VARCHAR(50) // e.g., "Explorer", "Hero", "Seeker"
  description TEXT
  associated_data JSON // Flexible field for extra details
  created_at TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table DreamLogs {
  dream_id UUID [pk]
  user_id UUID [ref: > Users.user_id]
  dream_date DATE
  description TEXT
  symbols JSON // JSON array of symbols/themes (e.g., ["storm", "light"])
  emotional_tone VARCHAR(50) // e.g., "Joyful", "Anxious"
}

Table DailyLogs {
  log_id UUID [pk]
  user_id UUID [ref: > Users.user_id]
  log_date DATE
  habits_completed JSON // JSON array of completed habits (e.g., ["Meditation", "Exercise"])
  health_stats JSON // JSON object for stats (e.g., {"weight": 68.5, "blood_pressure": "120/80"})
  mood VARCHAR(50) // e.g., "Calm", "Anxious"
  reflection TEXT
}
  ```

### Simplified Schema

1. **Users Table**  
   Core user data, including login information and profile.

2. **Personas Table**  
   Tracks **dynamic persona rankings** (e.g., Explorer: 85%, Hero: 70%) based on the user's actions, dreams, and reflections.

3. **Dream Logs Table**  
   Stores **full and summarized dreams**, **symbols**, and **emotional tones** to help with dream analysis and persona insights.

4. **Daily Logs Table**  
   Tracks **habits**, **moods**, **health stats**, and **reflections**, forming a daily report to help users maintain a structured routine.

### Dynamic Persona Ranking
- **Personas are ranked dynamically** based on user behavior, dream themes, and reflections.  
- These rankings help us understand the user’s evolving personality and offer **personalized guidance** accordingly.

### Dream Summarization
- **AI-generated summaries** condense dream data for **Retrieval-Augmented Generation (RAG)**, enhancing the relevancy and depth of personalized responses.

---

## Market Potential

1. **Target Audience**:
   - **Older adults** seeking **self-reflection** and **mindfulness tools**.
   - **Niche market**: Individuals interested in **Jungian psychology** and **dream analysis**.

2. **Why It Works**:
   - Addresses **loneliness** and promotes **emotional growth**.
   - A unique combination of **psychology**, **cultural adaptation**, and **AI** that caters to the evolving needs of older adults.

3. **Monetization**:
   - **Freemium model**: Basic features are free, with paid features like **personalized insights** and **archetype tracking** available for premium users.

---

## Next Steps

1. **Build Prototype**:
   - Focus on **core features**: journaling, dream logging, and dynamic persona tracking.
   - Integrate **ChatGPT** for **personalized responses**.

2. **Test Alarms and Engagement**:
   - Trial the **suggested alarm schedule** with test users to refine the experience.

3. **Market Validation**:
   - Gather feedback from **older adults** and **mental health professionals**.
   - Explore partnerships with **wellness communities** and organizations for mental health support.

4. **Launch Plan**:
   - Start with **culturally relevant markets** like **Mexico**.
   - Utilize **social media** and **wellness influencers** for promotion.

5. **RAG Implementation**:
   - Example **RAG Prompt**:  
   Structured Prompt for a Journal Entry:

   ```
   You are a Jungian companion for the user.

   ### User Context:
   - Most Active Personas: Explorer (85), Dreamer (65).
   - Last 3 Dream Summaries:
     1. "Dreamed of a vast ocean with a storm. Symbols: Ocean, Storm."
     2. "In a dark forest, found a glowing orb. Symbols: Forest, Light."
     3. "Flying above a city in chaos. Symbols: Flight, Chaos."

   ### Task:
   The user has added this journal entry: "I feel conflicted today. My dreams are full of storms, and I feel like I'm searching for something."

   Provide guidance to help the user connect their recent feelings and dreams with their active personas. Offer actionable advice for self-discovery.
   ```

---

# End of File


# Next Steps for Development:
   - Prototype the Onboarding Flow: Start with goal-setting and OCEAN questions.
      - Short Version (10 Questions)
         Purpose: Quick and easy to complete during onboarding.
        ```
         1.Openness to Experience
         Positive: "I enjoy exploring new ideas and experiences."
         (Agree = High Openness)
         Negative: "I prefer to stick with what I already know rather than trying something new."
         (Agree = Low Openness)
         2. Conscientiousness
         Positive: "I like to plan and organize my tasks to stay on track."
         (Agree = High Conscientiousness)
         Negative: "I often leave things until the last minute or forget important details."
         (Agree = Low Conscientiousness)
         3. Extraversion
         Positive: "I feel energized when I spend time with others."
         (Agree = High Extraversion)
         Negative: "I prefer quiet time alone rather than socializing with a group."
         (Agree = Low Extraversion)
         4. Agreeableness
         Positive: "I try to see things from other people’s perspectives and help when I can."
         (Agree = High Agreeableness)
         Negative: "I find it difficult to trust or cooperate with others."
         (Agree = Low Agreeableness)
        ```
      - Full Version (50–100 Questions)
         Purpose: Highly detailed and accurate personality profile.

   - Implement Dream Logging & AI Summarization: Develop a simple interface for dream entry and AI summaries.
   - Focus on Key Features: Start with goal tracking, journaling, and persona tracking.
   - User Testing: Test with a small group to refine the flow and get feedback on ease of use.
