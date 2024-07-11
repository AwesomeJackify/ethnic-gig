import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const directoryPath = "src/assets/images/gallery"

test('test', async ({ page }) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.error('Unable to scan directory: ' + err);
    }

    files.forEach((file, index) => {
      // Construct the old file path
      const oldPath = path.join(directoryPath, file);

      // Construct the new file path
      const newPath = path.join(directoryPath, `gallery${index}${path.extname(file)}`);

      // Rename the file
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error('Error renaming file:', err);
        } else {
          console.log(`Renamed ${file} to ${path.basename(newPath)}`);
        }
      });
    });
  });
});