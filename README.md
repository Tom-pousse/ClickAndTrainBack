# NEST : pas à pas configuration

## Etape 1 : A faire une seule fois

```bash
$ npm i -g @nestjs/cli
```

## Etape 2 : ouverture d'un nouveau projet

```bash
$ nest new nom-projet
```

=> Choisir npm

_nb: pas besoin de git init, c'est automatique_

## Etape 3 : Se mettre dans le dossier nom-projet

## Etape 4 : générer une ressource

```bash
$ nest g res nom-ressources
```

=>choisir REST API
=>CRUD? Y

_nb: DTO : similaire à MODEL dans NODEJS, il va définir ce les champs attentdus dans une méthode_

## Etape 5 : installer TypeORM et Postgres

```bash
$ npm i @nestjs/typeorm typeorm pg
```

_nb: pg = postgres_

## Etape 6 : installer package pour lire `.env`

```bash
$ npm i --save @nestjs/config
```

_nb: equivalence dotenv dans nodejs_

## Etape 7 : dans app.module.ts, configurer imports

```
@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:[`.env`]}), nom-ressourceModule,
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [nom-ressource],
        synchronize: false,
    }),
  ],
  ...
})
```

_nb: si pas d'import automatique :_

```
import { TypeOrmModule } from '@nestjs/typeorm'_
```

_nb2: autoloadEntities : true, = entities: []_

## Etape 8 : Créer un fichier `.env` à la racine

```
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=mot_de_passe
POSTGRES_DATABASE=nom_database
```

_nb: ajouter .env dans .gitignore pour que notre mot de passe ne soit pas devoilé_

## Etape 8 : dans main.ts, configurer le préfixe global de l'api dans async function bootstrap(){}

```
app.setGlobalPrefix('api'),
```

## Etape 9 : dans nom-ressource.module.ts, importer TypeORMModule

```
@Module({
  imports: [TypeOrmModule.forFeature([Nom-ressource])],
  ...
})
```

_nb: si pas d'import automatique :_

```
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nom-ressource } from './entities/nom-ressource.entity';
```

## Etape 10 : dans nom-ressource.entity.ts, définir notre entité Nom-ressource

```
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class nom-ressource {
<!-- exemples -->
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nom: string;

  @Column()
  soleil: string;

  @Column('int')
  arrosage: number;

  @Column({ length: 500 })
  categorie: string;

  @Column({ length: 500 })
  image: string;
}
```

_nb: ({ length: 500 }) = contrainte_

## Etape 11 : créer nos DTO

### dans create-nom-ressource.dto.ts

```
export class CreateNom-ressourceDto {
  nom: string;
  soleil: string;
  arrosage: number;
  categorie: string;
  image: string;
}
```

### dans update-nom-ressource.dto.ts

=>herite des propriétés de CreateNom-ressourceDto
=>si on veut choisir les propriétés que l'on peut modifier on les notifie ici

## Etape 12 : dans nom-ressources.service.ts

### créer le contructor

```
  constructor(
    @InjectRepository(nom-ressource) private nom-ressourcesRepository: Repository<nom-ressource>,
  ) { }
```

_nb: si pas d'import automatique :_

```
import { InjectRepository } from '@nestjs/typeorm';
import { nom-ressource } from './entities/nom-ressource.entity';
import { Repository } from 'typeorm';
```

### toutes les fonctions sont ASYNC

### pour ce projet, le create :

```
  async create(createNom-ressourceDto: CreateNom-ressourceDto) {
    const nom-ressource = this.nom-ressourcesRepository.create(createnom-ressourceDto);
    const result = await this.nom-ressourcesRepository.save(nom-ressource);
    return result;
  }
```

## Etape 13 : lancer mon API

```bash
$ npm run start:dev
```

# Cors

## Dans main.ts :

```
app.enableCors();
```

# ClassValidator

## Etape 1 : installer Class-Validator :

```bash
npm i --save class-validator class-transformer
```

## Etape 2 : dans main.ts :

```
app.useGlobalPipes(new ValidationPipe());
```

=>indique à NestJs qu'il va devoir checker les entrées avec class-validator

_nb: si pas d'import automatique :_

```
import { ValidationPipe } from '@nestjs/common';
```

## Etape 3 : paramétrer le DTO :

```
export class Createnom-ressourceDto {
  @IsNotEmpty() //décorateur class-validator
  nom: string;

  ...
}
```

_nb: si pas d'import automatique des décorateurs:_

```
import { IsNotEmpty } from "class-validator";
```

# Authentification

## Etape 1 : creer une ressource auth:

```bash
nest g res auth
```

## Etape 2 : supprimer les inutiles:

```
- le DTO update (`src/auth/dto/update-auth.dto.ts`)
- l’entité (`src/auth/entities/auth.entity.ts`)
- les fichiers de test (`src/auth/auth.controller.spec.ts`, `src/auth/auth.service.spec.ts`)
```

## Etape 3 : méthode register:

```
fichier de service, tu peux garder la première méthode create que nous allons renommer en register
```

```bash
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  register(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }
}
```

## Etape 4 : controller:

```
on ne garde qu’une méthode Post pour le moment. (pense à mettre à jour la méthode du service appelée, car nous l’avons renommé de `create` → `register`)

Cette méthode sera accessible via l’url (`/register`), ton controller devrait donc ressembler à cela :
```

```bash
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.register(createAuthDto);
  }
}
```

## Etape 5 : DTO:

```
Complète le DTO avec les données de création utilisateur exemple :
```

```bash
export class CreateAuthDto {
	username: string;
	password: string;
}
```

## Etape 6 : bcrypt:

```
Nous allons avoir besoin de bcrypt pour hasher le mot de passe
```

```bash
npm i bcrypt
```

```bash
npm i --save-dev @types/bcrypt

```

```
ce place dans le  service auth
```

```bash
import * as bcrypt from 'bcrypt';
```

## Etape 7 : dans chaque module et chaque service:

```
Ensuite, nous allons devoir injecter l’entité User dans notre module.
imports: [TypeOrmModule.forFeature([User])],
```

```bash
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
```

```
 constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
```

```bash
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  register(createAuthDto: CreateAuthDto) {}
}
```

## Etape 8 : methode d'enregistrement:

```
complète la méthode register comme ceci :
```

```bash
async register(createAuthDto: CreateAuthDto) {
    const { username, password } = createAuthDto;

		// hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

		// création d'une entité user
    const user = this.userRepository.create({
      username,
      password: hashedPassword,
    });

    try {
			// enregistrement de l'entité user
			const createdUser = await this.userRepository.save(user);
      delete createdUser.password;
      return createdUser;
    } catch (error) {
			// gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException('username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
```

## Etape 9 : on teste:

```
Et maintenant, tu peux tester tout ça !

POST /auth/register avec un body contenant ce que tu avais prévu dans ton DTO
```

# Connexion

## Etape 1: créer un autre DTO login-auth.dto.ts:

```bash
export class LoginDto {
  username: string;
  password: string;
}

```

## Etape 2 : ajouter une méthode dans ton service :

```bash
async login (loginDto: LoginDto) {}

```

## Etape 3 : ajouter une méthode dans ton controler:

```bash
@Post('/login')
  login(
    @Body() loginDto: LoginDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.login(loginDto);
  }
```

## Etape 4 : on tesOn installe Passport et jwt pour la connexion:

```bash
npm i @nestjs/passport @nestjs/jwt
```

## Etape 5 : paramètre le module/middleware passport pour qu’il fonctionne avec des jwt et on paramètre notre module jwt pour que notre token soit valable 1 heure :

```bash
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      signOptions: { expiresIn: '1h' },
      secret: 'jaimelessushis',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

```

## Etape 6 : retour sur ma téthode login:

```bash
constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
		private jwtService: JwtService,
  ) {}

//...

async login (loginDto: LoginDto) {
	const { username, password } = loginDto;
	const user = await this.usersRepository.findOneBy({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    const payload = { username };
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken };
  } else {
    throw new UnauthorizedException(
      'Ces identifiants ne sont pas bons, déso...',
    );
  }
}
```

## Etape 7 : on teste:

```
POST /auth/login avec un body contenant ce que tu avais prévu dans ton DTO, tu devrais récupérer un token

```

# Autorisation

## Etape 1 : installer le package passport-jwt, Ainsi que ses types:

```bash
npm i passport-jwt
```

```bash
npm i --save-dev @types/passport-jwt
```

## Etape 2 : créer un fichier nommé : jwt.strategy.ts:

```bash
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from './user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super({
      secretOrKey: 'jaimelessushis',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

	// IMPORTANT IL FAUT GARDER CE NOM DE METHODE
  async validate(payload: any): Promise<User> {
    console.log('validate');
    const { username } = payload;
    const user: User = await this.userRepository.findOneBy({ username });

    if (!user) throw new UnauthorizedException();
    return user;
  }
}
```

```
Ce fichier de strategy va permettre à Passport d’aller chercher dans la base de données l’objet correspondant au User dont le token a été reçu dans une requête.
```

## Etape 3 : Créer un fichier dans ton module auth : get-user.decorator.ts:

```bash
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user; // NE PAS RENOMMER
		// c'est toujours la propriété user de req que l'on retourne
  },
);

```

## Etape 4 : mettre à jour les exports de ton AuthModule: :

```bash
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      signOptions: { expiresIn: '1h' },
      secret: 'jaimelessushis',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
	exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}

```

## Etape 5 : protéger certains controller ou certaines routes de ton controller en utilisant le décorateur @UseGuards(AuthGuard()) : :

```
- devant la classe de ton controller pour protéger toutes les routes
- devant une méthode de ton controller pour protéger cette route
```

```
Tu vas aussi pouvoir utiliser le décorateur @GetUser() user: User dans un paramètre d’une de tes méthodes pour pouvoir avoir accès à l’objet de l’utilisateur qui a envoyé la requête ! 🙂 voici un exemple:
```

```bash
@Post()
@UseGuards(AuthGuard())
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    console.log(user);
    return this.tasksService.createTask(createTaskDto, user);
  }
```
