import fs from 'fs';
import https from 'https';
import path from 'path';

const spices = [
  { id: 'spice-baharat', url: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'spice-sumac', url: 'https://images.pexels.com/photos/673862/pexels-photo-673862.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'spice-saffron', url: 'https://images.pexels.com/photos/11333144/pexels-photo-11333144.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'spice-five-spice', url: 'https://images.pexels.com/photos/6011749/pexels-photo-6011749.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'spice-sichuan', url: 'https://images.pexels.com/photos/5953516/pexels-photo-5953516.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'spice-star-anise', url: 'https://images.pexels.com/photos/6011749/pexels-photo-6011749.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'spice-chilies', url: 'https://images.pexels.com/photos/6287515/pexels-photo-6287515.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'spice-garam-masala', url: 'https://images.pexels.com/photos/7428102/pexels-photo-7428102.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'spice-turmeric', url: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'spice-cardamom', url: 'https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'spice-kashmiri', url: 'https://images.pexels.com/photos/2086622/pexels-photo-2086622.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'spice-coriander', url: 'https://images.pexels.com/photos/4183204/pexels-photo-4183204.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'category-spices', url: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=800'}
];

const destDir = path.join(process.cwd(), 'public', 'images', 'products');
const catDir = path.join(process.cwd(), 'public', 'images', 'categories');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}
if (!fs.existsSync(catDir)) {
  fs.mkdirSync(catDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const spice of spices) {
    const isCat = spice.id.startsWith('category');
    const destPath = isCat 
      ? path.join(catDir, `${spice.id}.jpg`) 
      : path.join(destDir, `${spice.id}.jpg`);
    console.log(`Downloading ${spice.url} to ${destPath}`);
    try {
      await download(spice.url, destPath);
      console.log(`Success: ${spice.id}`);
    } catch (e) {
      console.error(`Failed: ${spice.id}`, e);
    }
  }
}

run();
