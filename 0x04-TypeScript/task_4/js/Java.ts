// Java.ts

namespace Subjects {
    export class Java extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        public getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingJava !== undefined) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}

