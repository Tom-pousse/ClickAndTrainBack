import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { Acquire } from 'src/acquire/entities/acquire.entity';
import { Enable } from 'src/enable/entities/enable.entity';

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty() // // ojectif du match limité les doublons par utilisation des majuscule ex: Alfred ALfred AlfreD ce qui est une partique courante dans les jeux
  @Matches(/^[A-Z][a-zA-Z0-9]*$/, {
    message:
      'Merci de commencer votre Pseudo par une majuscule puis des minuscules, maj et/ou chiffres.',
  })
  nom_pseudo: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  nom_email: string;

  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
    message:
      'Un mot de passe valide dois comporter 8 caractères, 1 lettre minuscule, 1 lettre majuscule 1 chiffre et 1 caractère spécial.',
  })
  nom_password: string;

  @IsNotEmpty()
  @IsNumber()
  @IsNotEmpty()
  num_score: number;
  @IsNotEmpty()
  @IsInt()
  @IsNotEmpty()
  num_click: number;

  acquire: Acquire[];
  enable: Enable[];
}
