# course-tag-cli
super easy to tag things now. 
Just go `npm install -g .`
(replace the . with this directory if you're not in this directory)

set env var MONGO_URL to the url to 
mongodb+srv://username:password@gradtrak-cenwq.azure.mongodb.net/gradtrak-INSERT_DEV_OR_PROD_HERE?retryWrites=true&w=majority

or not if you're testing on local. Make sure to replace username:password, and INSERT_DEV_OR_PROD with either 'dev' or 'prod'. 

Then, 
`gradtrak tag <tag-id> courseid1 courseid2 courseid3`. 
You can insert any number of courseids per tagid.

Try `gradtrak tag -h` for a list of common tags that may be useful. 
