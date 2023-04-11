-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "charName" TEXT NOT NULL,
    "classes" TEXT NOT NULL,
    "classLvL" TEXT NOT NULL,
    "hitDice" INTEGER NOT NULL,
    "totalHitPoints" INTEGER NOT NULL,
    "str" INTEGER NOT NULL DEFAULT 8,
    "dex" INTEGER NOT NULL DEFAULT 8,
    "cons" INTEGER NOT NULL DEFAULT 8,
    "wis" INTEGER NOT NULL DEFAULT 8,
    "inte" INTEGER NOT NULL DEFAULT 8,
    "cha" INTEGER NOT NULL DEFAULT 8
);

-- CreateTable
CREATE TABLE "AttackList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "atkName" TEXT NOT NULL,
    "atkType" TEXT NOT NULL,
    "atkDice" INTEGER NOT NULL,
    "atkNdice" INTEGER NOT NULL,
    "characterId" TEXT,
    CONSTRAINT "AttackList_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Spells" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "spellName" TEXT NOT NULL,
    "spellDesc" TEXT NOT NULL,
    "spellSchool" TEXT NOT NULL,
    "spellComponents" TEXT NOT NULL,
    "attackSpell" BOOLEAN NOT NULL DEFAULT false,
    "attackDamageDice" INTEGER,
    "attackDamageNDice" INTEGER
);

-- CreateTable
CREATE TABLE "SpellBook" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT,
    "spellsId" TEXT,
    CONSTRAINT "SpellBook_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "SpellBook_spellsId_fkey" FOREIGN KEY ("spellsId") REFERENCES "Spells" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
