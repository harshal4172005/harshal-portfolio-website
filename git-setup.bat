@echo off
echo Setting up Git repository for your portfolio...

REM Navigate to the portfolio directory
cd /d "C:\Users\harsh\Desktop\harshal-portfolio-website"

REM Initialize Git repository
git init

REM Set up Git user (replace with your details)
git config user.name "Harshal Parekh"
git config user.email "harshalparekh17@gmail.com"

REM Add all files
git add .

REM Create initial commit
git commit -m "Initial portfolio upload - Professional portfolio website"

echo.
echo Repository setup complete!
echo.
echo Now please provide your GitHub repository URL to push the code.
echo It should look like: https://github.com/your-username/your-repo-name.git
echo.
pause