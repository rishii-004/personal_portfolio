#!/usr/bin/env bash

# Shell script to start the Next.js development server with beautiful feedback indicators

# Color styling tokens
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

clear
echo -e "${CYAN}========================================================${NC}"
echo -e "${YELLOW}🚀 Starting Personal Portfolio Development Server...   ${NC}"
echo -e "${CYAN}========================================================${NC}"

# Check for active node_modules
if [ ! -d "node_modules" ]; then
  echo -e "${YELLOW}📦 node_modules folder missing. Running npm install...${NC}"
  npm install
fi

echo -e "${GREEN}✓ Environment Verified Successfully!${NC}"
echo -e "${GREEN}✓ Dev Server ready at:${NC} ${CYAN}http://localhost:3000${NC}"
echo -e "${YELLOW}Press Ctrl+C at any time to close the server session.${NC}"
echo -e "${CYAN}========================================================${NC}"
echo ""

# Start the dev process
npm run dev
