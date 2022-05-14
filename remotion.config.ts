import {Config} from 'remotion';
import os from 'os';
// Config.Rendering.setImageFormat('png');
Config.Rendering.setConcurrency(os.cpus().length / 2);
Config.Output.setCodec('h264');
Config.Output.setCrf(2);
Config.Output.setOverwriteOutput(true);
// Config.Log.setLevel('verbose');