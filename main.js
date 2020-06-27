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

Refresh ();

renderFromPreset();
renderFromData();
renderFromFinishingSetting();


AppFinishingTask ();
DataVerification();

