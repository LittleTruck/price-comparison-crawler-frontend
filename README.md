# docker-laravel-vue
- **nginx** - `:80`
- **mysql** - `:3306`
- **php** - `:9000`
- **redis** - `:6379`
- **mailhog** - `:8025` 

## Install Dependency

```bash
cd src
npm install
composer install
```

## Run docker
```bash
docker-compose up -d --build site
 ```

## Use BrowserSync

```bash
docker-compose run --rm --service-ports npm run watch
```

## Rebulid sass-loader
```bash
docker-compose run --rm npm rebuild node-sass
```

## docker-compose npm install
```bash
docker-compose run --rm npm install
```
