// React.ts

namespace Subjects {
    export class React extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        public getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingReact !== undefined) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}

