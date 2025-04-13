import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// EJSテンプレートエンジンの設定
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

// 静的ファイルの設定
app.use('/dist', express.static(path.join(__dirname, 'public/dist')));

// ルートパスの設定
app.get('/', (req, res) => {
    res.render('index', { title: 'Node+Phaser' });
});

// サーバーの起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});