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

export class CreateAuthDto {
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
  @Matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  nom_email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
    {
      message:
        'Votre mot de passe doit contenir: 1 lettre majuscule et minuscule, un chiffre, un caractère spécial et faire au moins 8 caractère.',
    },
  )
  nom_password: string;

  @IsPositive()
  @Min(0)
  @IsNotEmpty()
  num_score: number;

  @IsBoolean()
  @IsNotEmpty()
  @IsIn([true, false])
  boo_admin: boolean;
}
