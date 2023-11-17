import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty({ message: 'le champ ne peut pas être vide' })
  // ojectif du match limité les doublons par utilisation des majuscule ex: Alfred ALfred AlfreD ce qui est une partique courante dans les jeux
  @Matches(/^[A-Z][a-zA-Z0-9]*$/, {
    message:
      'Merci de commencer votre Pseudo par une majuscule puis des minuscules, maj et/ou chiffres.',
  })
  nom_pseudo: string;
  @IsString()
  @IsNotEmpty({ message: 'le champ ne peut pas être vide' })
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
    message:
      'Un mot de passe valide dois comporter 8 caractères, 1 lettre minuscule, 1 lettre majuscule 1 chiffre et 1 caractère spécial.',
  })
  nom_password: string;
}
