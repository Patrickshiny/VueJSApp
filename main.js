requestAnimationFrame();
require('/here');
require('/essential');

require('/Dataset');
require('/Configuration');
require('/preset');

Refresh ();

renderFromPreset();
renderFromData();
renderFromFinishingSetting();

AppInit ();
AppFinished ();
DataBackup();
DataStoring();

ClosingGUI();
