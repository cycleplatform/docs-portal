---
sidebar_label: Namespaces and Kernel Capabilities
sidebar_position: 100
---


# Namespaces and Kernel Capabilities
Containers are isolated at the kernel level using namespaces and kernel level capabilities. You have full ability to configure these on a per-container basis with Cycle. This reference breaks down each namespace and kernel capability, giving the user flexibility to customize them as needed.


### Namespaces
Cycle utilizes kernel namespaces to provide the isolated workspace called the container. Each aspect of a "container" runs in a separate namespace, limiting it's access. The more namespaces assigned to a container, the more "isolated" it is. By default, Cycle applies ALL namespaces.


NAMESPACE | DESCRIPTION
----------|-------------
**pid** (Process Isolation) | The container sees itself as process (pid) 1 and no other processes on the host are visible.
**net** (Network Isolation) | The container gets a completely isolated network stack, and cannot see interfaces on the host system.
**ipc** (Inter Process Communication) | Isolates communication with other processes.
**mount** (Mount Point Isolation) | The container cannot see host mounts (drives)
**user** (User Isolation) | The user inside the container is mapped to 0 


### Kernel Capabilities
You can add extra kernel-level capabilities to fine-tune what permissions your containers have.

TYPE | CAPABILITY | DESCRIPTION
-----|------------|-------------
base | 	CAP_AUDIT_WRITE | Write records to kernel auditing log.
base | CAP_CHOWN | Make arbitrary changes to file UIDs and GIDs.
base | CAP_FSETID | Don't clear set-user-ID and set-group-ID mode bits when a file is modified. Set the set-group-ID bit for a file whose GID does not match the filesystem or any of the supplementary GIDs of the calling process.
base | CAP_DAC_OVERRIDE | (discretionary access control) Bypass file read, write, and execute permission checks.
 base | CAP_FOWNER | Bypass permission checks on the operations that normally require the filesystem UID of the process to match the UID of the file, excluding those operations covered by CAP_DAC_OVERRIDE and CAP_DAC_READ_SEARCH. Set inode flags (see inode flags) on arbitrary files. Set "Access Control Lists" (ACL's) on arbitrary files. Ignore directory sticky bit on file deletion. Specify O_NOATIME for arbitrary files in open() and fcntl().
base | CAP_SETFCAP | Set arbitrary capabilities on a file.
base | CAP_SETGID | Make arbitrary manipulations of process GIDs and supplementary GID list. Forge GID when passing socket credentials via UNIX domain sockets. Write a group ID mapping in a user namespace.
base | CAP_SETUID | Make arbitrary manipulations of process UIDs (setuid(), setreuid(), setresuid(), setfsuid()). Forge UID when passing socket credentials via UNIX domain sockets. Write a user ID mapping in a user namespace.
base | CAP_KILL | Bypass permission checks for sending signals. This includes use of the ioctl KDSIGACCEPT operation.
base | CAP_MKNOD | Create special files using mknod.
base | CAP_NET_BIND_SERVICE | Bind a socket to Internet domain privileged ports (port numbers under 1024).
base | CAP_SYS_CHROOT | Use chroot. Change count namespaces using setns.
Privileged | CAP_AUDIT_CONTROL | Enable and disable kernel auditing; change auditing filter rules; retrieve auditing status and filtering rules
Privileged | CAP_AUDIT_READ | Allow reading the audit log via a multicast netlink socket.
Privileged | CAP_SETPCAP | Transfer any capability in your permitted set to any pid, remove any capability in your permitted set from any pid
Privileged | CAP_DAC_READ_SEARCH | Overrides all DAC restrictions regarding read and search on files and directories, including ACL restrictions if [_POSIX_ACL] is defined. Excluding DAC access covered by CAP_LINUX_IMMUTABLE.
Privileged | CAP_NET_ADMIN | Perform various network-related operations, such as, interface configuration, administration of IP firewall, masquerading, and accounting, modify routing tables, bind to any address, for transparent proxying, set type-of-service (TOS), clear driver statistics, set promiscuous mode, enabling multicasting.
Privileged | CAP_NET_RAW | Use RAW and PACKET sockets. Bind to any address for transparent proxying.
Privileged | CAP_SYS_ADMIN | Perform a range of system administration operations - * avoid if possible *
Privileged | CAP_SYS_MODULE | Load and unload kernel modules
Privileged | CAP_SYS_NICE | Allow raising priority and setting priority on other (different UID) processes. Allow use of FIFO and round-robin (realtime) scheduling on own processes and setting the scheduling algorithm used by another process. Allow setting cpu affinity on other processes.
Privileged | CAP_SYS_PACCT | Allow configuration of process accounting
Privileged | CAP_SYS_PTRACE | Allow ptrace() of any process
Privileged | CAP_SYS_RAWIO | Allow ioperm/iopl access. Allow sending USB messages to any device via /proc/bus/usb.
Privileged | CAP_SYS_RESOURCE | Override resource limits. Set resource limits. Override quota limits.
Privileged | CAP_SYSLOG | Allow syslog(2)
Privileged | CAP_IPC_LOCK | Allow locking of shared memory segments. Allow mlock and mlockall.
Privileged | CAP_IPC_OWNER | Override IPC ownership checks.



### Further Reading
[Official Linux Man Pages: Capabilities](https://man7.org/linux/man-pages/man7/capabilities.7.html)