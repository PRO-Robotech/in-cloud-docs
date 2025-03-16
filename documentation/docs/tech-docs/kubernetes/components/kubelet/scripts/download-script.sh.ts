import dedent from 'ts-dedent'
import { DOWNLOAD_VERSION } from '@site/src/constants/kubernetes/downloads'
import { COMPONENTS_VERSION } from '@site/src/constants/kubernetes/componentsVersion'
import { TCustomValueItems } from '@site/src/customTypes/customValue'

export const KUBELET_DOWNLOAD_SCRIPT: TCustomValueItems = {
  data: {
    value: dedent`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${COMPONENTS_VERSION.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${DOWNLOAD_VERSION.kubelet.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${DOWNLOAD_VERSION.kubelet.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${DOWNLOAD_VERSION.kubelet.templateUrlBinCheckSum}"
      INSTALL_PATH="${DOWNLOAD_VERSION.kubelet.path}"


      LOG_TAG="kubelet-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubelet version..."

      CURRENT_VERSION=$(kubelet version --client --short 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating kubelet to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubelet..."
        curl -fsSL -o kubelet "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubelet"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubelet.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubelet"}' kubelet.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubelet..."
        install -m 755 kubelet "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubelet successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubelet is already up to date. Skipping installation."
      fi
    `,
  },
}
