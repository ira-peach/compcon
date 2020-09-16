// Maintain this file as the single point of import for all interface definitions
// (to the extent possible) in order to avoid any circular reference errors. Basic types and
// abstract classes should be imported before their children. AFAIK the definitions can be
// stored anywhere and collected imports are fine as long as their constituents are impored
// first in this file.

import { ICompendiumItemData } from './classes/CompendiumItem'
import { ILicensedItemData } from './classes/LicensedItem'
import { ISynergyData, ISynergyDecorator } from './classes/Synergy'
import { Action } from './classes/Action'
import { ICoreData } from './classes/mech/CoreSystem'
import { IFrameData, IFrameStats } from './classes/mech/Frame'
import { IMechEquipmentData } from './classes/mech/MechEquipment'
import { IDamageData } from './classes/Damage'
import { IRangeData } from './classes/Range'
import { IMechSystemData } from './classes/mech/MechSystem'
import { IWeaponModData } from './classes/mech/WeaponMod'
import { ICoreBonusData } from './classes/pilot/CoreBonus'
import { IPilotEquipmentData } from './classes/pilot/PilotEquipment'
import { IPilotArmorData } from './classes/pilot/PilotArmor'
import { IPilotWeaponData } from './classes/pilot/PilotWeapon'
import { IManufacturerData } from './classes/Manufacturer'
import { IFactionData } from './classes/Faction'
import { ITalentData } from './classes/pilot/Talent'
import { ISkillData } from './classes/pilot/Skill'
import { IMechWeaponData } from './classes/mech/MechWeapon'
import {
  INpcFeatureData,
  INpcReactionData,
  INpcSystemData,
  INpcDamageData,
  INpcWeaponData,
  INpcStats,
  INpcClassData,
  INpcTemplateData,
  INpcItemSaveData,
  INpcTechData,
  INpcData,
} from './classes/npc/interfaces'
import { IEncounterData, IMissionData, IActiveMissionData } from './classes/encounter/interfaces'
import { IContentPackManifest, IContentPack } from './classes/ContentPack'
import { ICounterData } from './classes/Counter'
import { ITagCompendiumData } from './classes/Tag'
import { IPilotData } from './classes/pilot/Pilot'

export {
  ICompendiumItemData,
  ILicensedItemData,
  ISynergyData,
  ISynergyDecorator,
  Action,
  ICoreData,
  IFrameData,
  IFrameStats,
  IMechEquipmentData,
  IDamageData,
  IRangeData,
  IMechSystemData,
  IWeaponModData,
  ICoreBonusData,
  IPilotEquipmentData,
  IPilotArmorData,
  IPilotWeaponData,
  IManufacturerData,
  IFactionData,
  ITalentData,
  ISkillData,
  IMechWeaponData,
  INpcFeatureData,
  INpcReactionData,
  INpcSystemData,
  INpcTechData,
  INpcDamageData,
  INpcWeaponData,
  INpcStats,
  INpcClassData,
  INpcTemplateData,
  INpcData,
  INpcItemSaveData,
  IEncounterData,
  IMissionData,
  IActiveMissionData,
  IContentPackManifest,
  IContentPack,
  ICounterData,
  ITagCompendiumData,
  IPilotData,
}
