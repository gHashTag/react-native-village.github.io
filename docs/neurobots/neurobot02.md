---
id: neurobot02
title: Make Chatbot
sidebar_label: Make Chatbot
---

## Creating a Chatbot with ChatGPT for Telegram on the Make.com Platform

![neurocoder](/img/neurobots/neuro1.png)

Creating a chatbot with ChatGPT integration for Telegram can be implemented using the Make.com automation platform (formerly Integromat). This allows you to quickly and easily set up a bot without writing code. Let's look at a step-by-step guide to creating such a bot.

## Step 1. Creating a New Bot in Telegram

1. In Telegram, find the @BotFather bot and start a conversation with it.
2. Send the command /newbot to create a new bot.
3. Follow BotFather's instructions, enter the bot's name and unique username.
4. Copy the API token provided by BotFather - it will be needed to set up the bot.

## Step 2. Creating a Scenario in Make.com

1. Register on the Make.com platform and create a new scenario.
2. Select the Telegram Bot module and the Watch for updates action.
3. Insert your bot's HTTP API token in the Create a webhook field.

## Step 3. Integration with OpenAI

#### 1. Create a new OpenAI module and select the Create a completion action.
#### 2. Insert the OpenAI API key you received upon registration.
#### 3. Select the ChatGPT model of your choice.
#### 4. Add message 1 with the role System and content "Reply to the user in their language".
#### 5. Add message 2 with the role User and content "1. Message: Text"(OpenAi).
#### 6. Set the Max tokens value depending on the selected model.
![neurocoder](/img/neurobots/image1.8.png)
![neurocoder](/img/neurobots/image1.9.png)

## Step 4. Sending a Response to Telegram

1. Create a new Telegram Bot module and select the Send a Text Message or a Reply action.
2. In the Chat ID field, insert "1. Message: Chat: ID"(Telegram Bot).
3. In the message text, insert "1: Message.Content"(OpenAI).
4. Select the MarkDown mode in the Parse Mode field.

![neurocoder](/img/neurobots/image1.10.png)
![neurocoder](/img/neurobots/image1.11.png)

## Step 5. Setting Up the Webhook

1. Copy the webhook URL from the Make.com scenario.
2. Bind the webhook to the bot using the template:
https://api.telegram.org/bot'TOKEN'/setWebhook?url='MAKEURL'
Replace 'TOKEN' with your bot's API token, and 'MAKEURL' with the webhook URL from Make.com.
3. Paste the resulting link into the browser.

## Step 6. Testing the Bot

Now you can test your bot by sending it a message. The bot should respond using ChatGPT capabilities. Thus, using the Make.com platform, you can quickly create a chatbot for Telegram with ChatGPT integration without writing code. This allows you to easily automate user interactions and provide them with intelligent responses based on ChatGPT capabilities.