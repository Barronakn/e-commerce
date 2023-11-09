## Utilisation

1. créez un fichier avec le nom .env `touch .env`
2. copier le contenu de .env.example vers .env
3. configurez votre connexion à la base de données dans .env
4. exécutez `composer install`
5. exécutez `composer require laravel/breeze --dev`
6. exécutez `php artisan breeze:install`
7. générer la clé d'application `php artisan key:generate`
8. exécutez `php artisan migrate --seed` (notez que --seed remplira la base de données avec des données factices)
9. exécutez `npm install`
10. exécutez `npm run dev`
11. vous êtes prêt à partir 😊
