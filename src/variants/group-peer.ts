import { createGroupVariant, createPeerVariant } from "../core/variants";

// Group variants
const group_hover = createGroupVariant("hover");
const group_focus = createGroupVariant("focus");
const group_active = createGroupVariant("active");
const group_visited = createGroupVariant("visited");
const group_has_checked = createGroupVariant("has-checked");
const group_has_focus = createGroupVariant("has-focus");
const group_has_invalid = createGroupVariant("has-invalid");

// Group class helpers
const group = (groupName?: string): string => {
  return groupName ? `group-${groupName}` : "group";
};

// Peer variants
const peer_invalid = createPeerVariant("invalid");
const peer_checked = createPeerVariant("checked");
const peer_focus = createPeerVariant("focus");
const peer_required = createPeerVariant("required");

// Peer class helpers
const peer = (peerName?: string): string => {
  return peerName ? `peer-${peerName}` : "peer";
};

export {
  group_hover,
  group_focus,
  group_active,
  group_visited,
  group_has_checked,
  group_has_focus,
  group_has_invalid,
  group,
  peer_invalid,
  peer_checked,
  peer_focus,
  peer_required,
  peer,
};
