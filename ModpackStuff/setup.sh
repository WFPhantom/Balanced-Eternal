#!/bin/sh

cd ..
MODLIST=modlist.json

echo "#!/bin/sh" > .git/hooks/post-merge
echo "java -jar InstanceSync.jar" >> .git/hooks/post-merge

echo "Done setting up hooks"

java -jar InstanceSync.jar