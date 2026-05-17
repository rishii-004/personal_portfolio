#!/usr/bin/env bash

# Shell script to build and launch the Next.js production server with visual feedback indicators

# Color styling tokens
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

clear
echo -e "${CYAN}========================================================${NC}"
echo -e "${YELLOW}🏗️  Building Production Bundle & Starting Server...    ${NC}"
echo -e "${CYAN}========================================================${NC}"

# Check for node_modules
if [ ! -d "node_modules" ]; then
  echo -e "${YELLOW}📦 node_modules folder missing. Running npm install...${NC}"
  npm install
fi

# Build project statically
echo -e "${CYAN}Running npm run build...${NC}"
npm run build

if [ $? -eq 0 ]; then
  echo ""
  echo -e "${GREEN}✓ Production bundle generated successfully!${NC}"
  echo -e "${GREEN}✓ Launching production server...${NC}"
  echo -e "${GREEN}✓ Active site served at:${NC} ${CYAN}http://localhost:3000${NC}"
  echo -e "${YELLOW}Press Ctrl+C to terminate the server session.${NC}"
  echo -e "${CYAN}========================================================${NC}"
  echo ""
  
  # Start production server
  npm run start
else
  echo ""
  echo -e "${RED}❌ Build compilation failed. Please verify typescript or CSS issues above.${NC}"
  echo -e "${CYAN}========================================================${NC}"
  exit 1
fi
