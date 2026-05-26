git add .
git commit -m "Update portfolio"
git pull origin master
git push origin master
git checkout gh-pages
git merge master
git push origin gh-pages
git checkout master
echo Done! Site will update in 1-2 minutes.
pause