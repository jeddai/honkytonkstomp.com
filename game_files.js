const files = [
    'STATS-2026-08-08_LittleCityRollerDerbyLittleCity_vs_NashvilleRollerDerbyNashville',
    'STATS-2026-08-08_MemphisRollerDerbyMemphisBSides_vs_HardKnoxRollerDerbyHardKnoxAllstars_1',
    'STATS-0026-08-08_ClarksvilleRollerDerbyRockLobsters_vs_LittleCityRollerDerbyLittleCity_1',
    'STATS-2026-08-08_NashvilleRollerDerby_vs_MemphisRollerDerby',
    'STATS-2026-08-08_HardKnoxRollerDerby_vs_ClarksvilleRollerDerby',
    'STATS-2026-08-09_MemphisRollerDerbyMemphisBSides_vs_LittleCityRollerDerbyLittleCity',
    'STATS-2026-08-09_NashvilleRollerDerbyNashville_vs_HardKnoxRollerDerbyHardKnoxAllstars_2',
    'STATS-2026-08-09_MemphisRollerDerbyMemphisBSides_vs_ClarksvilleRollerDerbyRockLobsters_1',
    'STATS-2026-08-09_HardKnoxRollerDerbyHardKnoxAllstars_vs_LittleCityRollerDerbyLittleCity_1',
    'STATS-2026-08-09_ClarksvilleRollerDerbyRockLobsters_vs_NashvilleRollerDerbyNashville_1',
];

const downloadGameFile = (game, ext) => {
    const filename = `${files[game]}.${ext}`;
    let link = document.createElement("a");
    link.download = name;
    link.href = `/${ext}/${filename}`;
    link.click();
}
