import { error } from '../../../../../models/error';

interface PreviewState {
  preview: string;
  error: error;
  isSuccessSaveFinal: boolean | undefined;
  finalPdf: Blob | null;
}

export default PreviewState;
