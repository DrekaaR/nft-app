import { MergeContext } from "contexts/MergeContext";
import { useContext, useState } from "react";

export const useCanvasRecorder = () => {
  const { mergeState, setMergeState } = useContext(MergeContext);
  const [isRecording, setIsRecording] = useState(false);

  let mediaRecorder;
  let recordedChunks;

  const startRecording = (canvas) => {
    setIsRecording(true);

    const screenshot = canvas.toDataURL("image/png");
    console.log(screenshot);

    const stream = canvas.captureStream(30);
    mediaRecorder = new MediaRecorder(stream, {
      mimeType: "video/webm",
      ignoreMutedMedia: true,
    });

    recordedChunks = [];

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    };

    mediaRecorder.start();

    setTimeout(() => {
      mediaRecorder.stop();

      setIsRecording(false);

      setTimeout(() => {
        const blob = new Blob(recordedChunks, {
          type: "video/webm",
        });

        setTimeout(() => {
          setMergeState({ ...mergeState, screenshot: screenshot, video: blob });
        }, 0);

        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "recording.webm";
        a.click();
        URL.revokeObjectURL(url);
      }, 0);
    }, 12000);
  };
  return { startRecording, isRecording };
};
