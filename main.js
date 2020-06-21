requestAnimationFrame();
require('/here');
require('/essential');
require('/preset');

DataBackup();
DataStoring();

Refresh ();
AppInit ();

require('/Dataset');
require('/Configuration');

renderFromPreset();
renderFromData();
renderFromFinishingSetting();


AppFinished ();
ClosingGUI();

