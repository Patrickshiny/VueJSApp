requestAnimationFrame();
require('/here');
require('/essential');

require('/Dataset');
require('/Configuration');
require('/preset');

renderFromPreset();
renderFromData();
renderFromFinishingSetting();

AppInit ();
AppFinished ();
DataBackup();
DataStoring();

ClosingGUI();
