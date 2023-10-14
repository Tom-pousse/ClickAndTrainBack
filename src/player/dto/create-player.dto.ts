import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsPositive,
  IsString,
  Matches,
  Min,
} from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  // ojectif du match limité les doublons par utilisation des majuscule ex: Alfred ALfred AlfreD ce qui est une partique courante dans les jeux
  @Matches(/^[A-Z][a-z0-9]*$/, {
    message:
      'Merci de commencer votre Pseudo par une majuscule puis des minuscules et/ou chiffres.',
  })
  nom_pseudo: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  nom_email: string;

  @IsString()
  @IsNotEmpty()
  nom_password: string;

  @Min(0)
  @IsNotEmpty()
  num_score: number;

  // ajout de valeur suplementaire
  @Min(0)
  @IsNotEmpty()
  num_click: number;

  @IsBoolean()
  @IsNotEmpty()
  boo_admin: boolean;
}
