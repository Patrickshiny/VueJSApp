requestAnimationFrame();
require('/here');
require('/essential');

require('/Dataset');
require('/Configuration');
require('/preset');

renderFromPreset();
renderFromData();

AppInit ();
AppFinished ();
DataBackup();
DataStoring();
