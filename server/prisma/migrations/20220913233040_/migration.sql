/*
  Warnings:

  - You are about to drop the column `published` on the `ads` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ads" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "yearPlaying" INTEGER NOT NULL,
    "discord" TEXT NOT NULL,
    "weekDays" TEXT NOT NULL,
    "hourStart" INTEGER NOT NULL,
    "hourEnd" INTEGER NOT NULL,
    "useVoiceChannel" BOOLEAN NOT NULL,
    "gameId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ads_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ads" ("createdAt", "discord", "gameId", "hourEnd", "hourStart", "id", "name", "updatedAt", "useVoiceChannel", "weekDays", "yearPlaying") SELECT "createdAt", "discord", "gameId", "hourEnd", "hourStart", "id", "name", "updatedAt", "useVoiceChannel", "weekDays", "yearPlaying" FROM "ads";
DROP TABLE "ads";
ALTER TABLE "new_ads" RENAME TO "ads";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
