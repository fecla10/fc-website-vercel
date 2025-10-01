# Environment Variables Setup

## Required Environment Variables

To run this application, you need to set up the following environment variables:

### OpenAI API Key (Required)
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

**How to get your OpenAI API Key:**
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the API key

### Alternative: Anthropic API Key
If you prefer to use Anthropic Claude instead:
```bash
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```
**Note:** You'll need to update the ChatInterface.tsx to use Anthropic instead of OpenAI.

## Setting Up Environment Variables

### For Local Development
1. Create a `.env.local` file in the root directory
2. Add your API keys as shown above
3. The application will automatically load these variables

### For Vercel Deployment
1. In your Vercel dashboard, go to Project Settings → Environment Variables
2. Add `OPENAI_API_KEY` as a production environment variable
3. Redeploy your application

## Security Notes
- Never commit API keys to version control
- Use `.env.local` for local development (already in .gitignore)
- Rotate API keys regularly for security
- Monitor your API usage on the OpenAI dashboard
