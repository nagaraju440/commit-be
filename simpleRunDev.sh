echo "Starting Script Started!"
npm install
echo "deleting and re-creating all the tables..."    
npm run db-drop-dev
npm run db-create-dev
npm run db-migrate-dev
echo "re-creating done..."
echo "dumping the initial data into DB..."
npm run db-seed-dev
npm run dev
echo "dumping complete!"
