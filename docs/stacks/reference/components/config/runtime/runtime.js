import React from "react";
import { AutoTable } from "../../autotable";

// ❌  ✅

export const RuntimeFields = [
  ["workdir", "String", "❌", "Override the working directory defined on the image."],
  ["command", "Object", "❌", "Override the default command used for this image."],
  ["namespaces", "Array", "❌", "A list of the namespaces accessible - can be `ipc`, `pid`, `uts`, `network`, `mount`, `user`."],
  ["environment_vars", "Record", "❌", "Additional environment variables that can will be available to the container during runtime."],
  ["privileged", "Boolean", "❌", "A boolean where true sets this container to privileged mode."],
  ["sysctl", "Record", "❌", "A record of key value sysctl pairs."],
  ["rlimits", "Record", "❌", "A record of key value rlimit settings."],
  ["seccomp", "Object", "❌", "An optional array of seccomp rules that can be disabled."],
  ["capabilities", "Array", "❌", "A list of linux kernel capabilities to apply to the container instances."],
  ["host", "Object", "❌", "Settings to interact with the underlying host."],
];

export const CommandObject = [
  ["path", "String", "✅", "A string showing the 'path' to the executable to be used."],
  ["args", "String", "✅", "The args for the program executed in path."],
];

export const SeccompObject = [
  ["disabled", "Boolean", "✅", "A boolean where true means seccomp will be disabled for this container."],
  ["rules", "object", "❌", "An array of seccomp rules."],
];

export const SeccompRules = [
  ["capabilities", "object", "✅", "A container capability that acts as a filter on syscalls saying if this capability is included or excluded act according to the following rules."],
  ["syscall", "object", "✅", "An object holding a list of syscalls, an action, and optional args to evaluate when the capability is used."],
];

export const SeccompRulesCapabilities = [
  ["includes", "String", "❌", "A container capability that should be checked to exist and if so follow the syscall rule and actions."],
  ["exludes", "String", "❌", "A container capability that should be checked to not exist and if so follow the syscall rule and actions."],
];

export const SeccompRulesSyscall = [
  ["names", "Array", "✅", "An array of syscalls."],
  ["action", "String", "✅", "An action to apply."],
  ["args", "Object", "❌", "An optional object that has the specific syscall in seccomp."],
];

export const SeccompArgs = [
  ["index", "Number", "✅", "The index for syscall arguemnets."],
  ["value", "Number", "✅", "The value for syscall arguements."],
  ["valueTwo", "Number", "❌", "An optional second value for the syscall arguments."],
  ["op", "String", "✅", "The operator for syscall arguements in seccomp"],
];

export const HostArgs = [["expose_proc", "Boolean", "❌", "A boolean where true represents this container having the underlying hosts `/proc` directory mounted to it."]];

export const SeccompObjectTable = () => <AutoTable tablevalues={SeccompObject} />;

export const SeccompRulesTable = () => <AutoTable tablevalues={SeccompRules} />;
export const SeccompRulesCapabilitiesTable = () => <AutoTable tablevalues={SeccompRulesCapabilities} />;
export const SeccompRulesSyscallTable = () => <AutoTable tablevalues={SeccompRulesSyscall} />;

export const RuntimeTable = () => <AutoTable tablevalues={RuntimeFields} />;

export const RuntimeCommandTable = () => <AutoTable tablevalues={CommandObject} />;

export const SeccompArgsTable = () => <AutoTable tablevalues={SeccompArgs} />;

export const HostTable = () => <AutoTable tablevalues={HostArgs} />;

export const RuntimeExample = `{
  "workdir": "/override/working/directory",
  "command": {
    "path": "redis-server", 
    "args": "/var/lib/config/redis.conf"
  },
  "namespaces": ["uts"],
  "environment_vars": {
    "MY_CUSTOM_VARIABLE": "isthisvalue",
    "MY_CUSTOM_VARIABLE_TWO": "isthisvalue2"
  },
  "privileged": "false",
  "sysctl": {
    "net.ipv6.conf.all.forwarding": “1”
  },
  "rlimits": {
    "RLIMIT_NOFILE": {
      "hard": 1048576,
      "soft": 65000
    }
  },
  "seccomp": {
    "disable": false,
    rules: [
      {
        "capabilities": {
          "includes": "CAP_SYS_ADMIN"
        },
        "syscall": {
          "names": ["bpf", "clone", "clone3", "fanotify_init", "fsconfig", "fsmount", "fspick", "lookup_dcookie", "mount", "move_mount", "name_to _handle_at", "open_tree", "perf_event_open", "quotactl", "setdomainname", "sethostname", "setns", "syslog", "umount", "umount2", "unshare"],
          "action": "SCMP_ACT_ALLOW"
        }
      }
    ]
  }, 
  "host": {
    "allow_proc": true
  },
  "capabilities": [ "CAP_CHOWN", "CAP_FSETID", "CAP_DAC_OVERRIDE"]
}`;

// seccomp > rules > syscall
// type LinuxSyscall struct {
// 	Names  []string           `json:"names"`
// 	Action LinuxSeccompAction `json:"action"`
// 	Args   []LinuxSeccompArg  `json:"args,omitempty"`
// }

// type LinuxSeccompAction string
// LinuxSeccompAction taken upon Seccomp rule match

// const (
// 	ActKill  LinuxSeccompAction = "SCMP_ACT_KILL"
// 	ActTrap  LinuxSeccompAction = "SCMP_ACT_TRAP"
// 	ActErrno LinuxSeccompAction = "SCMP_ACT_ERRNO"
// 	ActTrace LinuxSeccompAction = "SCMP_ACT_TRACE"
// 	ActAllow LinuxSeccompAction = "SCMP_ACT_ALLOW"
// 	ActLog   LinuxSeccompAction = "SCMP_ACT_LOG"
// )
// Define actions for Seccomp rules

// type LinuxSeccompArg struct {
// 	Index    uint                 `json:"index"`
// 	Value    uint64               `json:"value"`
// 	ValueTwo uint64               `json:"valueTwo,omitempty"`
// 	Op       LinuxSeccompOperator `json:"op"`
// }
// LinuxSeccompArg used for matching specific syscall arguments in Seccomp

// is the value here a syscall bit?

// type LinuxSeccompOperator string
// LinuxSeccompOperator used to match syscall arguments in Seccomp

// const (
// 	OpNotEqual     LinuxSeccompOperator = "SCMP_CMP_NE"
// 	OpLessThan     LinuxSeccompOperator = "SCMP_CMP_LT"
// 	OpLessEqual    LinuxSeccompOperator = "SCMP_CMP_LE"
// 	OpEqualTo      LinuxSeccompOperator = "SCMP_CMP_EQ"
// 	OpGreaterEqual LinuxSeccompOperator = "SCMP_CMP_GE"
// 	OpGreaterThan  LinuxSeccompOperator = "SCMP_CMP_GT"
// 	OpMaskedEqual  LinuxSeccompOperator = "SCMP_CMP_MASKED_EQ"
// )
// Define operators for syscall arguments in Seccomp

// Seccomp
// Seccomp provides application sandboxing mechanism in the Linux kernel. Seccomp configuration allows one to configure actions to take for matched syscalls and furthermore also allows matching on values passed as arguments to syscalls. For more information about Seccomp, see Seccomp kernel documentation. The actions, architectures, and operators are strings that match the definitions in seccomp.h from libseccomp and are translated to corresponding values.

// seccomp (object, OPTIONAL)

// The following parameters can be specified to set up seccomp:

// defaultAction (string, REQUIRED) - the default action for seccomp. Allowed values are the same as syscalls[].action.

// architectures (array of strings, OPTIONAL) - the architecture used for system calls. A valid list of constants as of libseccomp v2.3.2 is shown below.

// SCMP_ARCH_X86
// SCMP_ARCH_X86_64
// SCMP_ARCH_X32
// SCMP_ARCH_ARM
// SCMP_ARCH_AARCH64
// SCMP_ARCH_MIPS
// SCMP_ARCH_MIPS64
// SCMP_ARCH_MIPS64N32
// SCMP_ARCH_MIPSEL
// SCMP_ARCH_MIPSEL64
// SCMP_ARCH_MIPSEL64N32
// SCMP_ARCH_PPC
// SCMP_ARCH_PPC64
// SCMP_ARCH_PPC64LE
// SCMP_ARCH_S390
// SCMP_ARCH_S390X
// SCMP_ARCH_PARISC
// SCMP_ARCH_PARISC64
// flags (array of strings, OPTIONAL) - list of flags to use with seccomp(2).

// A valid list of constants is shown below.

// SECCOMP_FILTER_FLAG_TSYNC
// SECCOMP_FILTER_FLAG_LOG
// SECCOMP_FILTER_FLAG_SPEC_ALLOW
// syscalls (array of objects, OPTIONAL) - match a syscall in seccomp. While this property is OPTIONAL, some values of defaultAction are not useful without syscalls entries. For example, if defaultAction is SCMP_ACT_KILL and syscalls is empty or unset, the kernel will kill the container process on its first syscall. Each entry has the following structure:

// names (array of strings, REQUIRED) - the names of the syscalls. names MUST contain at least one entry.

// action (string, REQUIRED) - the action for seccomp rules. A valid list of constants as of libseccomp v2.4.0 is shown below.

// SCMP_ACT_KILL
// SCMP_ACT_TRAP
// SCMP_ACT_ERRNO
// SCMP_ACT_TRACE
// SCMP_ACT_ALLOW
// SCMP_ACT_LOG
// args (array of objects, OPTIONAL) - the specific syscall in seccomp. Each entry has the following structure:

// index (uint, REQUIRED) - the index for syscall arguments in seccomp.

// value (uint64, REQUIRED) - the value for syscall arguments in seccomp.

// valueTwo (uint64, OPTIONAL) - the value for syscall arguments in seccomp.

// op (string, REQUIRED) - the operator for syscall arguments in seccomp. A valid list of constants as of libseccomp v2.3.2 is shown below.

// SCMP_CMP_NE
// SCMP_CMP_LT
// SCMP_CMP_LE
// SCMP_CMP_EQ
// SCMP_CMP_GE
// SCMP_CMP_GT
// SCMP_CMP_MASKED_EQ
