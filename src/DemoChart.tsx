import { staticFile } from 'remotion';
import * as ANI from 'anichart';
import { AniChart } from '@anichart/remotion';

export const DemoChart: React.FC = () => {
  return <AniChart initStage={initStage} />;
};

function initStage(stage: ANI.Stage) {
  stage.output = false;
  const bgAni = new ANI.RectAni();
  bgAni.component.shape = {
    width: stage.canvas.width + 10,
    height: stage.canvas.height,
  };
  bgAni.component.fillStyle = '#1e1e1e';

  const textLinesAni = new ANI.TextLinesAni();

  textLinesAni.component.fillStyle = '#eee';
  textLinesAni.component.textAlign = 'center';
  textLinesAni.component.textBaseline = 'middle';
  textLinesAni.component.position = {
    x: stage.canvas.width / 2,
    y: stage.canvas.height / 2,
  };
  const textAnichart = new ANI.TextAni();
  textAnichart.component.fontSize = 48;
  textAnichart.component.font = 'Sarasa Mono Slab SC';
  textAnichart.component.text = 'Anichart';
  textAnichart.component.fontWeight = 'bolder';
  textAnichart.type = 'blur';

  const textJannchieStudio = new ANI.TextAni();
  textJannchieStudio.component.fillStyle = '#666';
  textJannchieStudio.component.fontSize = 24;
  textJannchieStudio.component.text = 'Powered by Jannchie Studio';
  textJannchieStudio.component.font = 'Sarasa Mono Slab SC';
  textJannchieStudio.type = 'blur';

  // TextLinesAni.children.push(textAnichart);
  // textLinesAni.children.push(textJannchieStudio);
  ANI.recourse.loadImage(staticFile('./data/ANI.png'), 'logo');
  ANI.recourse.loadImage(
    'https://avatars3.githubusercontent.com/u/29743310?s=460&u=8e0d49b98c35738afadc04e70c7f3918d6ad8cdb&v=4',
    'jannchie'
  );

  ANI.recourse.loadCSV(staticFile('./data/test.csv'), 'data');
  // Ani.recourse.loadData("./data/test-meta.csv", "meta");
  const rectAni = ANI.createAni(
    [
      new ANI.Rect({
        position: { x: 100, y: 0 },
        shape: { width: 100, height: 0 },
        fillStyle: '#d23',
      }),
      new ANI.Rect({
        shape: { width: 100, height: 200 },
        fillStyle: '#2a3',
        alpha: 1,
      }),
      new ANI.Rect({
        shape: { width: 100, height: 0 },
        fillStyle: '#569',
        alpha: 0,
      }),
    ],
    [0, 1, 2],
    ANI.ease.easeElastic
  );

  const logoCenter = new ANI.Image({
    src: './data/ANI.png',
    position: {
      x: stage.canvas.width / 2,
      y: stage.canvas.height / 2,
    },
    alpha: 0.25,
    center: { x: 128, y: 128 },
    shape: { width: 256, height: 256 },
  });
  const logoAni = ANI.createAni(
    [
      new ANI.Image({
        src: './data/ANI.png',
        position: {
          x: 0,
          y: stage.canvas.height - 108,
        },
        shape: { width: 128, height: 128 },
      }),
      new ANI.Image({
        src: './data/ANI.png',
        position: {
          x: stage.canvas.width - 128,
          y: stage.canvas.height - 108,
        },
        shape: { width: 128, height: 128 },
        alpha: 1.0,
      }),
      new ANI.Image({
        src: './data/ANI.png',
        position: {
          x: stage.canvas.width - 128,
          y: stage.canvas.height - 108,
        },
        shape: { width: 128, height: 128 },
        alpha: 0,
      }),
    ],
    [0, 1, 2],
    ANI.ease.easeBounce
  );

  const barChart = new ANI.BarChart({
    shape: { width: stage.canvas.width, height: 300 },
    labelFormat(id) {
      return id;
      // Return meta.get(id).name;
    },
    dy: 5,
    itemCount: 5,

    barInfoOptions: {
      fillStyle: '#222',
      strokeStyle: undefined,
    },
    dateFormat: '%Y-%m-%d %H:%M:%S',
    aniTime: [4, 10],
  });

  const lineChart = new ANI.LineChart({
    aniTime: [4, 10],
    shape: { width: stage.canvas.width, height: stage.canvas.height / 2 },
    position: { x: 0, y: stage.canvas.height / 2 },
  });

  stage.addChild(bgAni);
  stage.addChild(logoCenter);
  stage.addChild(textLinesAni);
  stage.addChild(rectAni);
  stage.addChild(logoAni);

  const map = new ANI.MapChart({
    showLabel: true,
    projectionType: 'orthographic',
    showGraticule: true,
    aniTime: [4, 10],
  });
  stage.addChild(map);
  stage.addChild(barChart);
  stage.addChild(lineChart);
  const progress = new ANI.Progress({
    position: { x: stage.canvas.width / 2, y: stage.canvas.height / 2 },
  });
  const pie = new ANI.PieChart({
    aniTime: [4, 10],
    radius: [80, 120],
    position: { x: stage.canvas.width / 2, y: stage.canvas.height / 2 },
  });
  stage.addChild(pie);
  stage.addChild(progress);

  ANI.recourse.loadJSON(
    `https://raw.githubusercontent.com/Jannchie/geoJson-map-data/main/world.json`,
    'map'
  );
  return stage;
}
