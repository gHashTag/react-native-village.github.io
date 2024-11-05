---
id: neurobot01
title: Senler Chatbot
sidebar_label: Senler Chatbot
---

import YouTube from 'react-youtube'

# Creating a VK Chatbot with AI via Senler

![neurocoder](/img/neurobots/neuro1.png)

Creating a chatbot for your VKontakte community using the Senler service can be done in several steps. Below is a step-by-step guide to creating a bot that will interact with users through "clean" and "teacher" modes.

<YouTube videoId='xpEy-Llex5k' />

## Step 1: Creating a Chatbot

1. Log in to your personal account on the Senler website and select your community.
2. Go to the "Chatbots" section and click the "New Bot" button.
3. Enter the bot's name and save it. The system will automatically generate a bot key.

## Step 2: Setting Up the First Block

1. Create the first block that will send a message to the user with the text: "Hello, choose a mode".
2. Add two buttons:
- First button: name "clean", type: text.
- Second button: name "teacher", type: text.
- The color of the buttons can be chosen arbitrarily.

![neurocoder](/img/neurobots/image1.1.png)

## Step 3: Creating User Variables

#### 1. Create two action blocks and add the user variable mode.
#### 2. For the first action, set the value to clean, for the second — learn.
![neurocoder](/img/neurobots/image1.21.png)
![neurocoder](/img/neurobots/image1.22.png)

#### 3. Add the message "write a question", and check the "Wait for response" box.
#### 4. Create an Action where the response to the message is saved in the user variable question.
![neurocoder](/img/neurobots/image1.3.png)

## Step 4: Condition Group

1. Create a "Condition Group" block with two conditions:
- First condition: mode = clean.
- Second condition: mode = learn.

![neurocoder](/img/neurobots/image1.4.png)

## Step 5: Integration with ChatGPT

1. Create two ChatGPT integration blocks, one for each mode.
2. Set up ChatGPT for clean mode:
- Insert the OpenAI API key.
- Select the Chat type and model.
- Set the instruction: "Reply to the user in their language".

![neurocoder](/img/neurobots/image1.5.png)

## Step 6: Setting Up ChatGPT for Learn Mode

1. Repeat the settings as for clean mode, but change the instruction to: "Reply to the user in their language. You are well versed in JavaScript, TypeScript, React Native and similar languages".

## Step 7: Completing the Setup

#### 1. Add a message with the variable chat_gpt_answer ((%chat_gpt_answer%)).
#### 2. Add a button named "Change mode" and check the "Wait for response" box.
![neurocoder](/img/neurobots/image1.6.png)
#### 3. Connect all the blocks to complete the interaction chain.
![neurocoder](/img/neurobots/image1.7.png)

## Testing the Bot

